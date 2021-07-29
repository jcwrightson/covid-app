import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/extend-expect"

import Select from "../Select"

const countries = ["Belgium", "North Korea", "Greenland"]

describe("Select Country", () => {
  it("should list out all options", () => {
    render(<Select options={countries} onSelect={jest.fn()} />)
    const select = screen.getByRole("combobox")
    expect(select).toContainElement(screen.getByText("Belgium"))
    expect(select).toContainElement(screen.getByText("North Korea"))
    expect(select).toContainElement(screen.getByText("Greenland"))
  })

  it("should pre select option if `selected` is set", () => {
    render(
      <Select
        options={countries}
        selected={"North Korea"}
        handleSelect={jest.fn()}
      />
    )
    expect(screen.getByRole("combobox")).toHaveTextContent("North Korea")
  })

  it("should trigger onSelect handler with correct value", () => {
    const mockSelect = jest.fn()
    render(
      <Select
        options={countries}
        handleSelect={(e) => mockSelect(e.target.value)}
      />
    )

    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByText("Greenland")
    )

    expect(mockSelect).toBeCalledWith("Greenland")
  })

  it("Should match snapshot", () => {
    const snap = render(<Select options={countries} handleSelect={jest.fn()} />)
    expect(snap).toMatchSnapshot()
  })
})
