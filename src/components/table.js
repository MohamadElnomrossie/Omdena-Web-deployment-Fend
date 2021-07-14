import React from 'react'

export default function Table(props) {
    const entries=Object.entries(props.output)
    return (
        <div className=' mb-5'>
            <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{props.fLabel}</th>
            <th scope="col">{props.sLabel}</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            return (
              <tr key={entry[0]}>
                <td>{entries.indexOf(entry) + 1}</td>
                <td>
                  <span>{entry[0]}</span>
                </td>
                <td>
                  <span>{entry[1]}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
    )
}
