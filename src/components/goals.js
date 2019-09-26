import React, { useState } from "react"
import { css } from "@emotion/core"

const Goals = () => {
  const [Goals, setGoals] = useState(0)
  const label = `⚽️${Goals} ${Goals === 1 ? "Goooal!!!!" : "Goals!"}`

  return (
    <button
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
        font-size: 2.25rem;
      `}
      onClick={() => setGoals(Goals + 1)}
    >
      {label}
    </button>
  )
}

export default Goals
