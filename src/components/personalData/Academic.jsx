import React from 'react'
import styled from 'styled-components'

const Academic = () => {
  return (
    <>
      <Education>
        <table className="table table-hover table-bordered border-primary">
          <thead className='table-success'>
            <tr>
              <th className='table-danger' scope="col">S.No</th>
              <th scope="col">Examination</th>
              <th scope="col">Percentage</th>
              <th scope="col">Collage/University</th>
              <th className='table-warning' scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Matriculation</td>
              <td>83.27%</td>
              <td>Takht Bhai Model School Mardan</td>
              <td>2019</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Fsc Pre-Enginnering</td>
              <td>88.72%</td>
              <td>The Genius Collage Mardan</td>
              <td>2021</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td >Computer System Engineering</td>
              <td>89% (3.31GPA)</td>
              <td>University of Engineering and Technology Peshawar</td>
              <td>2021-25</td>
            </tr>
          </tbody>
        </table>
      </Education>
      <ButtonStyle>
        <a href='transcript.pdf' download="transcript.pdf" target="_blank">Transcript</a>
      </ButtonStyle>
      <ButtonStyle>
        <a href='dmc.pdf' download="dmc.pdf" target="_blank">Collage Dmc</a>
      </ButtonStyle>
    </>
  )
}

export default Academic

const Education = styled.div`
  background-color: lightgray;
  padding:3rem 7rem;
`;

const ButtonStyle = styled.button`
  margin: 2rem 1rem;
  float: right;
  a{
          color: white;
          text-decoration: none;
          font-family: "Inter",sans-serif;
     }
     @media(max-width: 500px){
          display: flex;
          padding: 1.5rem 3.5rem;
     }
`; 