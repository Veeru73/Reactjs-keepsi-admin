import React from "react";
import { Link } from "react-router-dom";
const PageTitle = ({page_headline}) => {
  return (
    <>
      <div className="row page_title mb-4 white-bg">
        <div className="col-lg-4">
          <p>{page_headline}</p>
        </div>
        <div className="col-lg-8 text-right">
          <div className="pageRight">
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageTitle;


// const getData = useCallback(async () => {
//   const usersList = [];

//   const res = await getAllUsers();
//   if (res.success) {
//     const data = res.data;

//     if (data.length > 0) {
//       data.forEach((val, index) => {
//         usersList.push(val);
//       });

//       setDataList(usersList);
//     }
//   }

//   setLoading(false);
// }, []);

// useEffect(() => {
//   document.body.classList.remove("bg-gradient-primary");
//   document.body.classList.add("page-top");

//   getData();
// }, [getData]);

