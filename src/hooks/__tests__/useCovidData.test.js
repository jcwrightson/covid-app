import { renderHook, act } from "@testing-library/react-hooks"
import "@testing-library/jest-dom/extend-expect"
import useCovidData from "../useCovidData"
import * as api from "../../api"
import { MemoryRouter } from "react-router-dom"

describe("useCovidData", () => {
  it("should use fetchCountries correctly and expose result", async () => {
    const spyCountries = jest
      .spyOn(api, "fetchCountries")
      .mockImplementation(async () => ["Belgium", "North Korea", "Greenland"])

    const { result, waitForNextUpdate } = renderHook(() => useCovidData(), {
      wrapper: MemoryRouter, // Our hook uses `history` and `params` so we should render it inside a router
    })

    expect(result.current.options).toEqual([])

    await waitForNextUpdate()

    expect(spyCountries).toHaveBeenCalled()

    expect(result.current.options).toEqual([
      "Belgium",
      "North Korea",
      "Greenland",
    ])

    spyCountries.mockRestore()
  })

  it("should use fetchCases correctly and expose results", async () => {
    const testData = {
      Belgium: 200,
    }
    const spyCases = jest
      .spyOn(api, "fetchCases")
      .mockImplementation(
        jest.fn((slug) => Promise.resolve(testData[slug] || 0))
      )

    const { result, waitForNextUpdate } = renderHook(
      (slug) => useCovidData(slug),
      {
        wrapper: MemoryRouter,
        initialProps: "Belgium",
      }
    )

    expect(result.current.cases).toEqual(0)
    await waitForNextUpdate()
    expect(spyCases).toHaveBeenCalledWith("Belgium", "confirmed")
    expect(result.current.cases).toEqual(200)

    act(() => {
      result.current.setSelected("Greenland")
    })

    await waitForNextUpdate()
    expect(spyCases).toHaveBeenCalledWith("Greenland", "confirmed")
    expect(result.current.cases).toEqual(0)
    spyCases.mockRestore()
  })
})
