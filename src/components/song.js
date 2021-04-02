import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Song = () => {
  const data = useStaticQuery(graphql`
    {
      mysqlSongs(mysqlId: { eq: 3 }) {
        mysqlId
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default Song
