import { MDBCard, MDBCardTitle, MDBContainer, MDBTable,
     MDBTableBody, MDBTableHead, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import Axios from 'axios'
import { useState, useEffect } from 'react'

const InvHistory =()=>{
    const [history, setHistory] = useState([])
    const getHistory=()=>{
        Axios.get("http://localhost:3001/InvHistory/read").then((response)=>{
            setHistory(response.data)
        })
    }

    const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);

  const [pageNumberLimit, setpageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(history.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = history.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <MDBCol
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          <MDBCol>{number}</MDBCol>
        </MDBCol>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <MDBCol onClick={handleNextbtn}> &hellip; </MDBCol>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <MDBCol onClick={handlePrevbtn}> &hellip; </MDBCol>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };


useEffect(() => {
    getHistory()
});

    return(
        <MDBContainer style={{
            position:"fixed",
            right:"2px",
            zIndex:"888",
            marginTop:"35px",
            width:"700px",

        }}>
            <MDBCard>
                <MDBCardTitle style={{marginTop:"15px"}}>
                   History
                </MDBCardTitle>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                        <th>Date</th>
                    </tr>
                </MDBTableHead>
                {currentItems.map((val, key)=>{

                    return<MDBTableBody key={key}>
                    <tr>
                        <td>{val.fullName}</td>
                        <td>{val.method}</td>
                        <td>{val.date}</td>
                    </tr>
                </MDBTableBody>
                })}
                
            </MDBTable>
            <MDBContainer>
            <MDBCard style={{
              marginTop:'20px'
            }}>
              <MDBRow center  
              style={{
              marginTop:"10px"
                }}>
                <MDBCol>
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={handlePrevbtn}
                    disabled={currentPage === pages[0] ? true : false}
                  >
                    <i className="fas fa-angle-left"></i>
                  </button>
                </MDBCol>
                <MDBCol>{pageDecrementBtn}</MDBCol>

                {renderPageNumbers}

                <MDBCol>{pageIncrementBtn}</MDBCol>
                <MDBCol style={{ marginBottom: "10px" }}>
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={handleNextbtn}
                    disabled={
                      currentPage == pages[pages.length - 1] ? true : false
                    }
                  >
                    {" "}
                    <i className="fas fa-angle-right"></i>{" "}
                  </button>
                </MDBCol>

                <MDBRow center>
                  <hr />
                  <MDBCol center>
                    <button
                      className="btn btn-dark btn-sm"
                      onClick={handleLoadMore}
                    >
                      Load All
                    </button>
                  </MDBCol>
                </MDBRow>
              </MDBRow>
            </MDBCard>
          </MDBContainer>
            </MDBCard>

        </MDBContainer>
    )
}

export default InvHistory;