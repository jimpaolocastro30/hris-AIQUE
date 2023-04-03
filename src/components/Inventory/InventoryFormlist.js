import { useState, useEffect } from "react";
import swal from "sweetalert2";
import Axios from "axios";
//import TextField from '@material-ui/core/TextField';
//import Autocomplete from '@material-ui/lab/Autocomplete';
import Fuse from "fuse.js";
import Fuse2 from "fuse.js"; //felix sakalam
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import AddDevice from "../AddDevice/AddDevice";
import AddInvMngmnt from "../addInvMngmt/AddInvMngmnt";
import Auth from "../auth/Auth";
import InvHistory from "../InvHistory/InvHistory";
import SidebarV2 from "../Sidebar/SidebarV2";




function InventoryFormlist() {
  ///////////
 
  /////////Show data in map function///////////
  const [inventoryList, setInventoryList] = useState([]);
  const [InvMngmnt,setInvMngmnt] = useState([]);

  const [Laptopstocks, setLaptopStocks] = useState([0]);
  const [Monitorstocks, setMonitorStocks] = useState([0]);
  const [Mousestocks, setMouseStocks] = useState([0]);
  const [Keyboardstocks, setKeyboardStocks] = useState([0]);
  ///////ternary///////////////
  const LaptopInput = Laptopstocks
    ? Laptopstocks
    : "Laptop Stocks are 0 Need to replenish";
  const MonitorInput = Monitorstocks
    ? Monitorstocks
    : "Monitor Stocks are 0 Need to replenish";
  const MouseInput = Mousestocks
    ? Mousestocks
    : "Mouse Stocks are 0 Need to replenish";
  const KeyboardInput = Keyboardstocks
    ? Keyboardstocks
    : "Keyboard Stocks are 0 Need to replenish";

  ////paginate(1)////
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(inventoryList.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inventoryList.slice(indexOfFirstItem, indexOfLastItem);

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




////paginate(2)////
const [currentPage2, setcurrentPage2] = useState(1);
const [itemsPerPage2, setitemsPerPage2] = useState(5);

const [pageNumberLimit2, setpageNumberLimit2] = useState(5);
const [maxPageNumberLimit2, setmaxPageNumberLimit2] = useState(5);
const [minPageNumberLimit2, setminPageNumberLimit2] = useState(0);

const handleClick2 = (event) => {
  setcurrentPage2(Number(event.target.id));
};

const pages2 = [];
for (let i2 = 1; i2 <= Math.ceil(InvMngmnt.length / itemsPerPage2); i2++) {
  pages2.push(i2);
}

const indexOfLastItem2 = currentPage2 * itemsPerPage2;
const indexOfFirstItem2 = indexOfLastItem2 - itemsPerPage2;
const currentItems2 = InvMngmnt.slice(indexOfFirstItem2, indexOfLastItem2);

const renderPageNumbers2 = pages2.map((number2) => {
  if (number2 < maxPageNumberLimit2 + 1 && number2 > minPageNumberLimit2) {
    return (
      <MDBCol
        key={number2}
        id={number2}
        onClick={handleClick2}
        className={currentPage2 == number2 ? "active" : null}
      >
        <MDBCol>{number2}</MDBCol>
      </MDBCol>
    );
  } else {
    return null;
  }
});

const handleNextbtn2 = () => {
  setcurrentPage2(currentPage2 + 1);

  if (currentPage2 + 1 > maxPageNumberLimit2) {
    setmaxPageNumberLimit2(maxPageNumberLimit2 + pageNumberLimit2);
    setminPageNumberLimit2(minPageNumberLimit2 + pageNumberLimit2);
  }
};

const handlePrevbtn2 = () => {
  setcurrentPage2(currentPage2 - 1);

  if ((currentPage2 - 1) % pageNumberLimit2 == 0) {
    setmaxPageNumberLimit2(maxPageNumberLimit2 - pageNumberLimit2);
    setminPageNumberLimit2(minPageNumberLimit2 - pageNumberLimit2);
  }
};

let pageIncrementBtn2 = null;
if (pages2.length > maxPageNumberLimit2) {
  pageIncrementBtn2 = <MDBCol onClick={handleNextbtn2}> &hellip; </MDBCol>;
}

let pageDecrementBtn2 = null;
if (minPageNumberLimit2 >= 1) {
  pageDecrementBtn2 = <MDBCol onClick={handlePrevbtn2}> &hellip; </MDBCol>;
}

const handleLoadMore2 = () => {
  setitemsPerPage2(itemsPerPage2 + 5);
};


///////hide/unhide////////////
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowBtn(false);
    },);
  }, []);
  const [showPlus, setShowPlus] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowPlus(false);
    },);
  }, []);
  const [showInv, setShowInv] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowInv(false);
    },);
  }, []);
  const [showEdit, setShowEdit] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowEdit(false);
    },);
  }, []);
  const [showInfo, setShowInfo] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowInfo(false);
    },);
  }, []);

  const [showInvMngmnt, setShowInvMngmnt] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowInvMngmnt(false);
    },);
  }, []);
  ///get token///
  const user = localStorage.getItem("bearer ");
  //search filter in Fuse
  const [query, setQuery] = useState("");
  const[query2,setQuery2]= useState("");
  //old used in back end Searching//
  //const [search, setSearch] = useState('')
  // const [searchlist, setSearchList] = useState ([])

  ////Update state ////
  const [updevice, setUpDevice] = useState("");
  const [upStatus, setUpStatus] = useState("");
  const [upDevNum, setUpDevNum] = useState("");
  const [upSpec, setUpSpec] = useState("");
  const [upProvider, setUpProvider] = useState("");
  const [UpPrice, setUpPrice] = useState("");
  const [upDate, setUpDate] = useState("");

  
  ////
  const updateDev = (id) => {
    Axios.put("http://13.229.91.120:3001/admin/update/updevice/:id", {
      id: id,
      newDevice: updevice,
    })
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateDevHistory = async (id, dev)=>{
    Axios.post(`http://13.229.91.120:3001/InvHistory/Updatedev/:id`,{
      devbefore:dev,
      fullName:hEmail,
      date:hdate,
      method:updevice
    })
   .then(res=>{
      updateDev(id)
    })

  }
  ////
  const updateStatus = (id) => {
    Axios.put("http://13.229.91.120:3001/admin/update/status/:id", {
      id: id,
      newStatus: upStatus,
    })
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateStatusHistory = async (id, dev)=>{
    Axios.post(`http://13.229.91.120:3001/InvHistory/UpdateStatus/${id}`,{
      devbefore:dev,
      fullName:hEmail,
      date:hdate,
      method:upStatus,
    })
   .then(res=>{
      updateStatus(id)
    })

  }
  ////
  const UpdateDeviceNumber = (id) => {
    Axios.put("http://13.229.91.120:3001/admin/update/deviceNum/:id", {
      id: id,
      newDeviceNum: upDevNum,
    })
      .then((res) => {
        fetchData();
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateDevNumHistory = async (id, dev)=>{
    Axios.post(`http://13.229.91.120:3001/InvHistory/UpdateDevNum/${id}`,{
      devbefore:dev,
      fullName:hEmail,
      date:hdate,
      method:upDevNum,
    })
   .then(res=>{
      UpdateDeviceNumber(id)
    })

  }
//////
  const UpdateSpec = (id) => {
    Axios.put("http://13.229.91.120:3001/admin/update/spec/:id", {
      id: id,
      newSpec: upSpec,
    })
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateSpecHistory = async (id, dev)=>{
    Axios.post(`http://13.229.91.120:3001/InvHistory/UpdateSpec/${id}`,{
      devbefore:dev,
      fullName:hEmail,
      date:hdate,
      method:upSpec,
    })
   .then(res=>{
      UpdateSpec(id)
    })

  }
//////
  const UpdateProvider = (id) => {
    Axios.put("http://13.229.91.120:3001/admin/update/provider/:id", {
      id: id,
      newProvider: upProvider,
    })
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProviderHistory = async (id, dev)=>{
    Axios.post(`http://13.229.91.120:3001/InvHistory/UpdateProvider/${id}`,{
      devbefore:dev,
      fullName:hEmail,
      date:hdate,
      method:upProvider,
    })
   .then(res=>{
      UpdateProvider(id)
    })

  }

  const UpdatePrice = (id) => {
    Axios.put("http://13.229.91.120:3001/admin/update/price/;id", {
      id: id,
      newPrice: UpPrice,
    })
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updatePriceHistory = async (id, dev)=>{
    Axios.post(`http://13.229.91.120:3001/InvHistory/UpdatePrice/${id}`,{
      devbefore:dev,
      fullName:hEmail,
      date:hdate,
      method:UpPrice,
    })
   .then(res=>{
      UpdatePrice(id)
    })

  }

  const UpdateDate = (id) => {
    Axios.put("http://13.229.91.120:3001/admin/update/date/:id", {
      id: id,
      newDate: upDate,
    })
      .then((res) => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const UpdateDateHistory = async (id, dev)=>{
    Axios.post(`http://13.229.91.120:3001/InvHistory/UpdateDate/${id}`,{
      devbefore:dev,
      fullName:hEmail,
      date:hdate,
      method:upDate,
    })
   .then(res=>{
      UpdateDate(id)
    })

  }
  
  // const myOptions = ['New', 'Used',  ];
  /////////////Fuse Search //////////////
  const fuse = new Fuse(inventoryList, {
    keys: ["device", "Status","deviceNum"],
    includeScore: true,
    threshold: 0.3,
    isCaseSensitive: true,
    useExtendedSearch: true,
  });

  const ResultV2 = fuse.search(query);
  const SearchResultsV2 = query
    ? ResultV2.map((result) => result.item)
    : currentItems;

  const handleOnSearchV2 = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setQuery(value);
  };

///Update States///
const [InvUpdevices, setInvupDevices] = useState("");
const [InvUpFullName, setInvUpFullName] = useState("");
const [InvUpEmail, setInvUpEmail] = useState("");
const [InvUpPosition, setInvUpPosition] = useState("");
const [InvUpDept, setInvUpDept] = useState("");
const [InvUpDeviceNums, setInvUpDeviceNums] = useState("");
const [InvUpSpecs, setInvUpSpecs] = useState("");
const [InvUpDate, setInvUpDate] = useState("");
/////////////INV MNGMNT Update////////////////
const updateInvDev = (id) => {
  Axios.put("http://13.229.91.120:3001/InvMngmnt/update/Devices/:id", {
    id: id,
    newDevices:InvUpdevices,
  })
    .then((res) => {
      showDataInv();
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateInvDevHistory = async (id, dev)=>{
  Axios.post(`http://13.229.91.120:3001/InvHistory/UpdateDevices/:id`,{
    devbefore:dev,
    fullName:hEmail,
    date:hdate,
    method:InvUpdevices,
  })
 .then(res=>{
    updateInvDev(id)
  })

}
/////////
const updateInvFullName = (id) => {
  Axios.put("http://13.229.91.120:3001/InvMngmnt/update/name/:id", {
    id: id,
    newName:InvUpFullName,
  })
    .then((res) => {
      showDataInv();
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateInvNameHistory = async (id, dev)=>{
  Axios.post(`http://13.229.91.120:3001/InvHistory/UpdateInvName/:id`,{
    devbefore:dev,
    fullName:hEmail,
    date:hdate,
    method:InvUpFullName,
  })
 .then(res=>{
    updateInvFullName(id)
  })

}
////////
const updateInvEmail = (id) => {
  Axios.put("http://13.229.91.120:3001/InvMngmnt/update/email/:id", {
    id: id,
    newEmail:InvUpEmail,
  })
    .then((res) => {
      showDataInv();
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateInvEmailHistory = async (id, dev)=>{
  Axios.post(`http://13.229.91.120:3001/InvHistory/UpdateInvEmail/:id`,{
    devbefore:dev,
    fullName:hEmail,
    date:hdate,
    method:InvUpEmail,
  })
 .then(res=>{
    updateInvEmail(id)
  })

}
////////////
const updateInvSpecs = (id) => {
  Axios.put("http://13.229.91.120:3001/InvMngmnt/update/specs/:id", {
    id: id,
    newSpecs:InvUpSpecs,
  })
    .then((res) => {
      showDataInv();
    })
    .catch((err) => {
      console.log(err);
    });
};
const updateInvSpecsHistory = async (id, dev)=>{
  Axios.post(`http://13.229.91.120:3001/InvHistory/UpdateInvSpecs/:id`,{
    devbefore:dev,
    fullName:hEmail,
    date:hdate,
    method:InvUpSpecs,
  })
 .then(res=>{
  updateInvSpecs(id)
})

}
//////////////
const updateInvPosition = (id) => {
  Axios.put("http://13.229.91.120:3001/InvMngmnt/update/position/:id", {
    id: id,
    newPosition:InvUpPosition,
  })
    .then((res) => {
      showDataInv();
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateInvPositionHistory = async (id, dev)=>{
  Axios.post(`http://13.229.91.120:3001/InvHistory/UpdateInvPosition/:id`,{
    devbefore:dev,
    fullName:hEmail,
    date:hdate,
    method:InvUpPosition,
  })
 .then(res=>{
  updateInvPosition(id)
})

}
///////////
const updateInvDept = (id) => {
  Axios.put("http://13.229.91.120:3001/InvMngmnt/update/dept/:id", {
    id: id,
    newDept:InvUpDept,
  })
    .then((res) => {
      showDataInv();
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateInvDeptHistory = async (id, dev)=>{
  Axios.post(`http://13.229.91.120:3001/InvHistory/UpdateInvDept/:id`,{
    devbefore:dev,
    fullName:hEmail,
    date:hdate,
    method:InvUpDept,
  })
 .then(res=>{
  updateInvDept(id)
})

}
//////////
const updateInvDevNums = (id) => {
  Axios.put("http://13.229.91.120:3001/InvMngmnt/update/deviceNums/:id", {
    id: id,
    newDeviceNum:InvUpDeviceNums,
  })
    .then((res) => {
      showDataInv();
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateInvDevNumsHistory = async (id, dev)=>{
  Axios.post(`http://13.229.91.120:3001/InvHistory/UpdateInvDevNums/:id`,{
    devbefore:dev,
    fullName:hEmail,
    date:hdate,
    method:InvUpDeviceNums,
  })
 .then(res=>{
  updateInvDevNums(id)
})

}
//////////////
const updateInvDate = (id) => {
  Axios.put("http://13.229.91.120:3001/InvMngmnt/update/date/:id", {
    id: id,
    newDate:InvUpDate,
  })
    .then((res) => {
      showDataInv();
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateInvDateHistory = async (id, dev)=>{
  Axios.post(`http://13.229.91.120:3001/InvHistory/UpdateInvDate/:id`,{
    devbefore:dev,
    fullName:hEmail,
    date:hdate,
    method:InvUpDate,
  })
 .then(res=>{
  updateInvDate(id)
})

}
///////
///////INV MNGMNT search//////
const fuse2 = new Fuse2(InvMngmnt, {
  keys: ["fullName", "email", "deviceNum","devices"],
  includeScore: true,
  threshold: 0.3,
  isCaseSensitive: true,
  useExtendedSearch: true,
});

const ResultV3 = fuse2.search(query2);
const SearchResultsV3 = query2
  ? ResultV3.map((result) => result.item)
  : currentItems2;

const handleOnSearchV3 = ({ currentTarget = {} }) => {
  const { value } = currentTarget;
  setQuery2(value);
};

  /////////////////////////////////////////
  const current = new Date();
const hdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const hEmail = localStorage.getItem('emailId');
const[showHistory,setShowHistory]= useState(false)
const [hMethod, setHMethod] = useState('')
console.log(hMethod)



///////delete with tracking history////////
const InventoryDelete = async (id)=>{
  
  try {
  await Axios.post(`http://13.229.91.120:3001/admin/delete/${id}`,{
        fullName:hEmail,
        id:id,
        date:hdate,
  })
} catch (error) {
  console.log(error)
}

}
const InventoryMngmntDelete = async (id)=>{
  
  try {
  await Axios.post(`http://13.229.91.120:3001/InvMngmnt/delete/${id}`,{
        fullName:hEmail,
        id:id,
        date:hdate,
  })
} catch (error) {
  console.log(error)
}

}


  //////////////////Axios CRUD Routes//////////////////
  ///////////////////////////////////////////
  ////////stock count states/////////
  const [resCount, setResCount] = useState("")
  const [newCount, setNewCount] = useState("")
  const [usedCount, setUsedCount] = useState("")
  const [toRepCount, setToRepCount] = useState("")
  const [decomCount, setDecomCount] = useState("")
  ////Data fetching of all device///////////
  
  
  const fetchData = () => {
    const options = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("Bearer"),
        "content-type": "application/json",
        accept: "application/json",
      },
    };
    

    Axios.get("http://13.229.91.120:3001/admin/read/", options).then((response) => {
      setInventoryList(response.data);
      ///////////////////

      Axios.get("http://13.229.91.120:3001/admin/Status?Status=Reserved", options).then((response) => {
      setResCount(response.data.result)
    })
    Axios.get("http://13.229.91.120:3001/admin/Status?Status=Used", options).then((response) => {
      setUsedCount(response.data.result)
    })
    Axios.get("http://13.229.91.120:3001/admin/Status?Status=New", options).then((response) => {
      setNewCount(response.data.result)
    })
    Axios.get("http://13.229.91.120:3001/admin/Status?Status=To Repair", options).then((response) => {
      setToRepCount(response.data.result)
    })
    Axios.get("http://13.229.91.120:3001/admin/Status?Status=Decomisioned", options).then((response) => {
      setDecomCount(response.data.result)
    })

  
      ///////////////////
      Axios.get("http://13.229.91.120:3001/admin/stock?device=Laptop").then(
        (response) => {
          setLaptopStocks(response.data.result);
        }
      );
      Axios.get("http://13.229.91.120:3001/admin/stock?device=Mouse").then(
        (response) => {
          setMouseStocks(response.data.result);
        }
      );
      Axios.get("http://13.229.91.120:3001/admin/stock?device=Monitor").then(
        (response) => {
          setMonitorStocks(response.data.result);
        }
      );
      Axios.get("http://13.229.91.120:3001/admin/stock?device=Keyboard").then(
        (response) => {
          setKeyboardStocks(response.data.result);
        }
      );
    }
    )
  };
  const showDataInv = ()=>{
     Axios.get("http://13.229.91.120:3001/InvMngmnt/read/").then((response) => {
      console.log(response)
      setInvMngmnt(response.data); 
    })
  }



  
  const deleteInvMngmt = (id) => {
    
    console.log(user);
    Axios.delete(`http://13.229.91.120:3001/InvMngmnt/delete/${id}`,).then(
      (res) => {
        swal
          .fire({
            position: "center",
            icon: "success",
            title: "Your Data has been \n deleted ",
            showConfirmButton: false,
            timer: 1500,
          })
          .then((res) => {
            showDataInv();
          });
      }
    );
  };

///////////////////////////////////////////////////////////


  
  
  ////Sweetalert2 pop up functions////
  const Mngmtndelete = (id) => {
    swal
      .fire({
        title: "Are you sure?",
        text: "this will delete your data",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      })
      .then(function (dismiss) {
        if (dismiss.isConfirmed == false) {
          swal.fire("Deletion is Cancelled");
          console.log("cancelled");
        } else {
          InventoryMngmntDelete(id).then(res=>{
             deleteInvMngmt(id);
          })
         
        }
      })
  };
  
  const  ddelete = (id)  => {

    swal
      .fire({
        title: "Are you sure?",
        text: "this will delete your data",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      })
      .then(function (dismiss) {
       
        if (dismiss.isConfirmed == false) {
          swal.fire({
            icon:"info",
            title:"Deletion is Cancelled"
          });
         
        } else {
         InventoryDelete(id).then((res)=>{
            deleteInvItem(id)
          })
        }
        
      })
    
  };


  const StockNotif = () => {
    Swal.fire({
      title: "Stocks",
      html:
        "<hr/> Laptop: " +
        LaptopInput +
        "<br/><hr/> Mouse: " +
        MouseInput +
        "<br/><hr/> Monitor: " +
        MonitorInput +
        "<hr/>" +
        "Keyboards: " +
        KeyboardInput +
        "<hr/>",
    });
  };

  
//////////////////////////////////
  ////////Delete Axios Route//////

  const deleteInvItem = (id) => {
    const user = localStorage.getItem("Bearer ");
    const options = {
      headers: {
        authorization: "Bearer " + localStorage.getItem("Bearer"),
        "content-type": "application/json",
        method: "delete",
        accept: "application/json",
      },
    };
    Axios.delete(`http://13.229.91.120:3001/admin/delete/${id}`, options).then(
      (res) => {
        swal
          .fire({
            position: "center",
            icon: "success",
            title: "Your Data has been \n deleted ",
            showConfirmButton: false,
            timer: 1500,
          })
          .then((res) => {
            fetchData();
            
          })
      }
    );
  };


///////Inv Management delete//////////

  {
    /*/////////for Backend Searching of device Number Only//////////////
    const findDevNum = ( )=>{
      Axios.get("http://13.229.91.120:3001/read/deviceNum?deviceNum="+search).then((response)=>{
        console.log(response.data.result)
        setSearchList(response.data.result)
        
      })
    }
  */
  }
  ////use effect to show device data////
  useEffect(() => {
    fetchData();
     showDataInv();
  }, []);
  //useEffect for useState console.logs//3
  useEffect(() => {
    if(!SearchResultsV3){
      return<div><MDBCard><h1>NO Data</h1></MDBCard></div>
    }
    if(SearchResultsV3==["null"]){
      return<div><MDBCard><h1>NO Data</h1></MDBCard></div>
    } 
  });

  return (
    <div className="Inv">
      <Auth/>
      <SidebarV2/>
      {showPlus&&
        <AddDevice />
      }
      {showInv&&
      <AddInvMngmnt/>
      }
      <MDBContainer style={{
        width:"100vw",
        marginTop:"20px"
      }}>
        {showHistory&&<InvHistory/>}
        

        <MDBRow >
        

          
          {/*////backEnd Searching... for Device Number only/////*/}
          {/*<p>Search:</p>
           <input
           type ="search" 
           onChange={(event)=>{setSearch(event.target.value)}}
           ></input>
           <button onClick={findDevNum}>Search</button>
           <hr/>
           {searchlist.map((val, key)=>{
            return <div key={key}>
              
            <hr />
            <p>Device:{val.device}</p>
            <p> DeviceNumber:{val.deviceNum} Status:{val.Status} Specifications:{val.spec} Provider{val.provider} Price{val.price} Date:{val.date}</p>
           </div>
           })}*/}
          
          
          <div
            className="h-100 d-flex justify-content-center align-items-center"
            style={{
              width: "80%",
              height: "500",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              marginLeft: "5%",
            }}
          >
            <MDBCol>
            <MDBCard >
            <MDBCol >
          <MDBCard style={{
            marginBottom:"15px",
            marginTop:"20px"
            
            
          }}>
            <MDBRow center>
              <MDBCol center>
                <MDBInput
                  type="search"
                  label="Search..."
                  onChange={handleOnSearchV2}
                  placeholder="Inventory Search..."
                ></MDBInput>
              </MDBCol>
            </MDBRow>
          </MDBCard>
          </MDBCol>
              <MDBRow>
                <MDBCol sm="5">
                  sort by Device:
                  <select
                    style={{ borderRadius: "5px", width: "70%", height: "50%" }}
                    onChange={handleOnSearchV2}
                  >
                    <option value="">Select...</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Mouse">Mouse</option>
                  </select>
                </MDBCol>
                <MDBCol sm="4">
                  sort by Status:
                  <select
                    style={{ borderRadius: "5px", width: "70%", height: "50%" }}
                    onChange={handleOnSearchV2}
                  >
                    <option value=''>Select...</option>
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                    <option value="Reserved">Reserved</option>
                    <option value="To Repair">To Repair</option>
                    <option value="Decommision">Decommision</option>
                  </select>
                </MDBCol>
                
                <MDBCol center sm='2'>
                  <MDBRow end>
                  <MDBBtn
                  style={{
                    borderRadius:"5px",
                    width:"160px",
                    padding:"5px",
                    marginLeft:"20px"

                  }}
                   onClick={() => setShowInvMngmnt(!showInvMngmnt)}
                  >
                    Inventory Management
                  </MDBBtn>
                  </MDBRow>
                 </MDBCol>
                 
                
              </MDBRow>
              <MDBRow style={{
                marginTop:"30px",
                
              }}>
               <hr style={{width:"90%", marginLeft:"30px"}}/>
                  <MDBCol md=''>

                  </MDBCol>
                  <MDBCol md='2'>
                    New: {newCount} 
                  </MDBCol>
                  <MDBCol md='2'>
                    Used: {usedCount} 
                  </MDBCol>
                  <MDBCol md='3'>
                    To Repair: {toRepCount} 
                  </MDBCol>
                  <MDBCol md='2'>
                    Reserved: {resCount} 
                  </MDBCol>
                  <MDBCol md='3'>
                    Decomisioned: {decomCount} 
                  </MDBCol>
                  <hr style={{width:"90%", marginLeft:"30px", marginTop:"10px"}}/>
              </MDBRow>
              <MDBCardBody style={{
               zIndex:"555"
              }}>
                <table style={{
                  opacity:"1.5",
                  backgroundColor:"white",
                  
                }} className="table table-hover">
                  <thead >
                    <tr>
                      <th scope="col">Device </th>
                      <th scope="col">Device Number</th>
                      <th scope="col">Status</th>
                      <th scope="col">Specifications</th>
                      <th scope="col">Provider</th>
                      <th scope="col">Price</th>
                      <th scope="col">Date</th>
                      <MDBBtn
                      style={{
                        borderRadius:"15px",
                        width:"90%",
                        
                      }}
                      onClick={() => StockNotif()}>Stocks</MDBBtn>
                    </tr>
                  </thead>

                  {SearchResultsV2.map((result, key) => {
                    key={key}
                   let Status = result.Status
                   try {
                    if (Status==="Reserved") {
                      Status = <p style={{color:"white",backgroundColor:"#EF5350",
                       padding:"4px", borderRadius:"5px", marginBottom:"0px"}}>Reserved</p>
                    } 
                    if (Status==="New") {
                      Status = <p style={{color:"White", backgroundColor:"#4CAF50", padding:"4px",
                       borderRadius:'5px', marginBottom:"0px" }}>New</p>
                    } 
                    
                    if (Status==="Used") {
                      Status = <p style={{color:"White", backgroundColor:"#9E9E9E", padding:"4px",
                       borderRadius:'5px', marginBottom:"0px" }}>Used</p>
                    } 
                    if (Status==="To Repair") {
                      Status = <p style={{color:"White", backgroundColor:"#673AB7", padding:"4px",
                       borderRadius:'5px', marginBottom:"0px" }}>To Repair</p>
                    } 
                    if (Status==="Decommisioned") {
                      Status = <p style={{color:"White", backgroundColor:"#607D8B", padding:"4px",
                       borderRadius:'5px', marginBottom:"0px" }}>Decomisioned</p>
                    } 
                   } catch (error) {
                    
                   }
                    
                    return (
                      <tbody key={key}>
                        <tr>
                          <td
                            style={{
                             
                              alignItems: "center",
                              flexDirection: "column",
                              gap: "10px",
                            }}
                          >
                            {result.device}

                            {showBtn && (
                              <form onSubmit={() => updateDevHistory(result._id, result.device)} style={{
                                zIndex:"99"
                              }}>
                                <input
                                  type="text"
                                  required
                                  onChange={(event) => {
                                    setUpDevice(event.target.value);
                                  }}
                                  placeholder={result.device}
                                  style={{
                                    display: "flex",
                                  }}
                                ></input>

                                <button
                                  style={{
                                    border: "none",
                                  }}
                                >
                                  {" "}
                                  <i className="fas fa-check fa-lg"></i>
                                </button>
                              </form>
                            )}
                          </td>
                          <td
                            style={{
                              alignContent: "center",
                            }}
                          >
                            <p style={{ marginBottom: "12px" }}>
                              {result.deviceNum}
                            </p>
                            {showBtn && <form onSubmit={() => updateDevNumHistory(result._id, result.deviceNum)}>
                              <input
                              required
                                type="text"
                                onChange={(event) => {
                                  setUpDevNum(event.target.value);
                                }}
                                placeholder={result.deviceNum}
                                style={{
                                  display: "flex",
                                }}
                              ></input>
                              <button
                               
                                style={{
                                  border:"none"
                                }}
                              >
                                {" "}
                                <i className="fas fa-check fa-lg"></i>
                              </button>
                              </form>
                            }
                          </td>
                          <td>
                            <p style={{ marginBottom: "12px" }}>
                              {Status}
                            </p>
                            {showBtn && <form onSubmit={() => updateStatusHistory(result._id, result.Status)}>
                              <select
                                required
                                onChange={(event) => {
                                  setUpStatus(event.target.value);
                                }}
                              >
                                <option value=''>Select...</option>
                                <option value="Used">Used</option>
                                <option value="To Repair">To Repair</option>
                                <option value="New">New</option>
                                <option value="Reserved">Reserved</option>
                                <option value="Decommisioned">
                                  Decommisioned
                                </option>
                              </select>
                             
                              <button
                                style={{
                                  border:"none"
                                }}
                              >
                                {" "}
                                <i className="fas fa-check fa-lg"></i>
                              </button>
                              </form>
                            }
                          </td>
                          <td>
                            <p style={{ marginBottom: "12px" }}>
                              {result.spec}
                            </p>
                            {showBtn && <form onSubmit={() => updateSpecHistory(result._id, result.spec)}>
                              <input
                                type="text"
                                required
                                onChange={(event) => {
                                  setUpSpec(event.target.value);
                                }}
                                placeholder={result.spec}
                                style={{
                                  display: "flex",
                                }}
                              ></input>
                            
                            
                              <button
                                style={{border:"none"}}
                              >
                                {" "}
                                <i className="fas fa-check fa-lg"></i>
                              </button>
                              </form>
                            }
                          </td>
                          <td>
                            <p style={{ marginBottom: "5px" }}>
                              {result.provider}
                            </p>
                            {showBtn && <form onSubmit={() => updateProviderHistory(result._id, result.provider)}>
                              <input
                                type="text"
                                required
                                onChange={(event) => {
                                  setUpProvider(event.target.value);
                                }}
                                placeholder={result.provider}
                                style={{
                                  display: "flex",
                                }}
                              ></input>
                           
                            
                              <button
                                style={{border:"none"}}
                              >
                                {" "}
                                <i className="fas fa-check fa-lg"></i>
                              </button>
                              </form>
                            }
                          </td>
                          <td>
                            {result.price}
                            {showBtn && <form onSubmit={() => updatePriceHistory(result._id, result.price)}>
                              <input
                                type="number"
                                onChange={(event) => {
                                  setUpPrice(event.target.value);
                                }}
                                placeholder={result.price}
                                style={{
                                  display: "flex",
                                }}
                              ></input>
                            
                           
                              <button
                              
                                style={{border:"none"}}
                              >
                                {" "}
                                <i className="fas fa-check fa-lg"></i>
                              </button>
                              </form>
                            }
                          </td>
                          <td>
                            {result.date}
                            {showBtn && <form>
                              <input
                                type="date"
                                onChange={(event) => {
                                  setUpDate(event.target.value);
                                }}
                                style={{
                                  display: "flex",
                                }}
                              ></input>
                            
                              <a
                                onClick={() => UpdateDateHistory(result._id, result.date)}
                                style={{}}
                              >
                                {" "}
                                <i className="fas fa-check fa-lg"></i>
                              </a>
                              </form>
                              
                            }
                          </td>
                          <div>
                          <button
                            style={{
                              borderRadius: "30px",
                            }}
                            type="button"
                            className="btn btn-danger btn-lg btn-floating"
                            onClick={() => {ddelete(result._id)}}

                          >
                            <i className="fas fa-trash-alt fa-sm"></i>
                          </button>
                          <button
                            style={{
                              borderRadius: "30px",
                            }}
                            type="button"
                            className="btn btn-primary btn-lg btn-floating"
                            onClick={() => setShowBtn(!showBtn)}
                          >
                            <i className="fas fa-edit fa-sm"></i>
                          </button>
                          </div>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                <MDBRow style={{
                  height:"70px"
                }}>
                  <MDBCol md='4'>
                  <MDBBtn 
                  onClick={()=>setShowHistory(!showHistory)}
                  >
                    History
                  </MDBBtn>
                  </MDBCol>
                  <MDBCol md='4'>

                  </MDBCol>
                  
                <MDBCol md='4'> 
                
                  {!showPlus&&<MDBBtn color='success' style={{padding:"5px", alignItems:"center",
                   width:"150px"}}
                  onClick={() => setShowPlus(!showPlus)}
                  >
                  <MDBRow>
                    <MDBCol style={{paddingRight:"5px", paddingLeft:"5px"}}>
                 <MDBIcon fas icon="plus" size="2x" style={{marginTop:"4px", marginRight:"5px"}} /> 
                  </MDBCol>
                 </MDBRow>
                  </MDBBtn>}
                  {showPlus&&<MDBBtn color='danger' style={{padding:"5px", alignItems:"center",
                   width:"150px"}}
                  onClick={() => setShowPlus(!showPlus)}
                  >
                  <MDBIcon fas icon="minus" size="2x" style={{marginTop:"4px",}}/>
                  </MDBBtn>}
                 
                  </MDBCol>  
                </MDBRow>
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
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
            {showInvMngmnt&&<MDBCol style={{
               height: "500px",
               marginBottom:"470px"
            }}>
              
              <MDBCard style={{
                display:"flex",
               alignSelf:"self-start",
               width:"750px"
              }}>
                  <MDBCardBody>
                <MDBRow>
                  <MDBRow>
                    <MDBCol md='1'>
                    {!showInv&&<MDBBtn color='#FFFF' style={{ border:"none", width:"40px", padding:"0px", 
                  height:"30px", outline:"none", boxShadow:"none", }}
                  onClick={() => setShowInv(!showInv)}
                  >
                  <MDBIcon fas icon="plus" size="2x"/>
                  </MDBBtn>}
                  {showInv&&<MDBBtn color='#FFFF' style={{ border:"none", width:"40px", padding:"0px", 
                  height:"30px", outline:"none", boxShadow:"none", }}
                  onClick={() => setShowInv(!showInv)}
                  >
                  <MDBIcon fas icon="minus" size="2x"/>
                  </MDBBtn>}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow style={{
                    width:"1000px"
                  }}>
                    <MDBCol md='5' center style={{
            marginLeft:"190px"
          }}>
            <MDBCard style={{marginBottom:"7px"}} >
              <MDBRow center>
                <MDBCol center>
                <MDBInput 
                onChange={handleOnSearchV3}
                type="search"
                label="Search..."
                placeholder="Search Employee..."
                style={{}}/>
                </MDBCol>
               </MDBRow>
            </MDBCard>
          </MDBCol>

                 <MDBTable
                 style={{
                  marginLeft:"15px",
                  width:"1000",
                  backgroundColor:"white"
                 }}
                 hover>
                  <MDBTableHead>
                      <tr>
                        <th scope='col'>FullName</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Department</th>
                        <th scope='col'>Position</th>
                       
                      </tr>
                      
                  </MDBTableHead>
                 
                  {SearchResultsV3.map((val, key)=>{
                    return <MDBTableBody key={key}>
                    <tr 
                    >
                      <td >
                      {val.fullName}
                      
                      {showEdit&&<form onSubmit={()=>updateInvNameHistory(val._id, val.fullName)}>
                      <input 
                       onChange={(event) => {
                        setInvUpFullName(event.target.value);
                      }}
                        required
                        type='text'/>

                      <button
                      style={{
                        border:"none",
                        marginTop:"5px"
                      }}
                      >
                      <MDBIcon className='fa-check' size='lg'/>
                      </button>
                      </form>
                      }

                      {showInfo&&<div><hr/>Devices: {val.devices}
                      {showEdit&&<form onSubmit={()=>updateInvDevHistory(val._id, val.devices)}>
                        <input type='text'
                      required
                      onChange={(event) => {
                        setInvupDevices(event.target.value);
                      }}
                      />
                       <button
                      style={{
                        border:"none",
                        marginTop:"5px"
                      }}
                      >
                      <MDBIcon className='fa-check' size='lg'/>
                      </button>
                      </form>
                      }
                      </div>
                      }
                    </td>
                    <td>
                    {val.email}
                    {showEdit&&<form onSubmit={()=>updateInvEmailHistory(val._id, val.email)}>
                    <input type='text'
                    onChange={(event) => {
                      setInvUpEmail(event.target.value);
                    }}
                    required

                      />
                     <button
                      style={{
                        border:"none",
                        marginTop:"5px"
                      }}
                      >
                      <MDBIcon className='fa-check' size='lg'/>
                      </button>
                    </form> }
                    
                    {showInfo&&<div style={{
                      marginTop:"15px"
                    }}><hr/>Device Numbers: {val.deviceNum}
                     {showEdit&&<form onSubmit={()=>updateInvDevNumsHistory(val._id, val.deviceNum)}>
                     <input type='text'
                     onChange={(event) => {
                      setInvUpDeviceNums(event.target.value);
                    }}
                      required
                      />
                      <button
                      style={{
                        border:"none",
                        marginTop:"5px"
                      }}
                      >
                      <MDBIcon className='fa-check' size='lg'/>
                      </button>
                      </form>}
                    </div>}
                    </td>
                    <td>
                    {val.department}
                    {showEdit&&<form onSubmit={()=>updateInvDeptHistory(val._id, val.department)}>
                    <input type='text'
                    onChange={(event) => {
                      setInvUpDept(event.target.value);
                    }}
                    required
                      />
                      <button
                      style={{
                        border:"none",
                        marginTop:"5px"
                      }}
                      >
                      <MDBIcon className='fa-check' size='lg'/>
                      </button>
                      </form> }

                    {showInfo&&<div style={{
                      marginTop:"15px"
                    }}><hr/>specs: {val.specs}
                    {showEdit&&<form onSubmit={()=>updateInvSpecsHistory(val._id, val.specs)}>
                    <input type='text'
                    onChange={(event) => {
                      setInvUpSpecs(event.target.value);
                    }}
                      required
                      />
                      <button
                      style={{
                        border:"none",
                        marginTop:"5px"
                      }}
                      >
                      <MDBIcon className='fa-check' size='lg'/>
                      </button>
                      </form> }
                    </div>}
                    </td>
                    <td>
                    {val.position}
                    {showEdit&&<form onSubmit={()=>updateInvPositionHistory(val._id, val.position)}>
                    <input type='text'
                    onChange={(event) => {
                      setInvUpPosition(event.target.value);
                    }}
                    required
                      />
                      <button
                      style={{
                        border:"none",
                        marginTop:"5px"
                      }}
                      >
                      <MDBIcon className='fa-check' size='lg'/>
                      </button>
                      </form> }

                      {showInfo&&<div style={{
                      marginTop:"15px"
                    }}><hr/>Date: {val.date}
                    {showEdit&&<form onSubmit={()=>updateInvDateHistory(val._id, val.date)}>
                    <input type='date'
                    onChange={(event) => {
                      setInvUpDate(event.target.value);
                    }}
                      required
                      />
                      <button
                      style={{
                        border:"none",
                        marginTop:"5px"
                      }}
                      >
                      <MDBIcon className='fa-check' size='lg'/>
                      </button>
                      </form> }
                    </div>}

                    </td> 
                      <td style={{width:"4000px"}}>
                      <MDBBtn 
                      onClick={()=>{Mngmtndelete(val._id)}}
                      style={{
                       borderRadius:"30px",
                       margin:"5px"
                      }} floating size='lg' color="danger" tag='a'>
                      <MDBIcon fas icon='trash' />
                    </MDBBtn>
                      <MDBBtn
                      onClick={() => setShowEdit(!showEdit)}
                      style={{
                       borderRadius:"30px"
                      }} floating size='lg' tag='a'>
                      <MDBIcon fas icon="edit" />
                    </MDBBtn>
                    {!showInfo&&<MDBBtn
                      color="info"
                      onClick={() => setShowInfo(!showInfo)}
                      style={{
                       borderRadius:"30px", margin:"5px"
                      }} floating size='lg' tag='a'>
                      <MDBIcon fas icon="angle-down" />
                    </MDBBtn>}

                    {showInfo&&<MDBBtn
                      color="info"
                      onClick={() => setShowInfo(!showInfo)}
                      style={{
                       borderRadius:"30px", margin:"5px"
                      }} floating size='lg' tag='a'>
                      <MDBIcon fas icon="angle-up" />
                    </MDBBtn>}
                    
                   </td>
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
                    onClick={handlePrevbtn2}
                    disabled={currentPage2 === pages2[0] ? true : false}
                  >
                    <i className="fas fa-angle-left"></i>
                  </button>
                </MDBCol>
                <MDBCol>{pageDecrementBtn2}</MDBCol>

                {renderPageNumbers2}

                <MDBCol>{pageIncrementBtn2}</MDBCol>
                <MDBCol style={{ marginBottom: "10px" }}>
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={handleNextbtn2}
                    disabled={
                      currentPage2 == pages2[pages2.length - 1] ? true : false
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
                      onClick={handleLoadMore2}
                    >
                      Load All
                    </button>
                  </MDBCol>
                </MDBRow>
              </MDBRow>
            </MDBCard>
          </MDBContainer>
                 </MDBRow>
                  </MDBRow>
                  </MDBCardBody>
                  </MDBCard>
            </MDBCol>}
           
            
          </div>
          <br></br>
          
        </MDBRow>
      </MDBContainer>

      <br></br>

      {/*/////////old Map function Shows all device no filtering////////
              {inventoryList.map((val, key)=>{
                  return <div key={key}>
                    
                   
                    <hr />
                    <p>Device:{val.device}</p>
                    <p> DeviceNumber:{val.deviceNum} Status:{val.Status} Specifications:{val.spec} Provider{val.provider} Price{val.price} Date:{val.date}</p>
                  <div> 
            
            <br></br>
          <button onClick={() =>ddelete(val._id)}>delete</button>
               <Link to = '/update' state={{ id: val._id }}> <button>Update</button> </Link>
               
          </div>

              </div>})}
              */}

      <br></br>
    </div>
  );
}

export default InventoryFormlist;
