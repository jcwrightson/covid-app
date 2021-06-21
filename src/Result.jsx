const Result = ({ cases, status }) => {
  return <p className="result">{status.toUpperCase()} {cases}</p>
}

export default Result
