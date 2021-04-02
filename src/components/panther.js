import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Panther() {
  const data = useStaticQuery(graphql`
    query PantherQuery {
      mysqlSongs {
        name
      }
      allMysqlSongs(limit: 5) {
        nodes {
          name
        }
      }
    }
  `)

  const songs = data.allMysqlSongs.nodes

  return (
    <Panther>
      <h1>{songs.length} songs</h1>

      {songs.map(song => {
        const name = song.name

        return <li>{song.name}</li>
      })}
    </Panther>
  )
}
