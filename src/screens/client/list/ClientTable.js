import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllClients } from "../../../services/Api_calling";
import { useState } from "react";
import Loader from "../../../components/Loader";

const ClientTable = () => {
  const [loading, setLoading] = useState(false);
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await getAllClients();
      if (res.success) {
        setClientData(res.data);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Link
      to={"/add-audio"}
      className="btn btn-info btn-sm mr-1 mb-2 float-right"
    >
      Add Audio
    </Link> */}
          {/* <Link
      to={"/add-album"}
      className="btn btn-primary btn-sm mr-1 mb-2 float-right"
    >
      Add Album
    </Link> */}

          <table
            id="dtBasicExample"
            className="table table-striped table-bordered table-sm mt-3 "
          >
            <thead>
              <tr>
                <th className="th-sm">SNO</th>
                <th className="th-sm">Wallet Address</th>
                <th className="th-sm">Stacke Nfts</th>
                <th className="th-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {clientData.map((client, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{client.wallet_address}</td>
                  <td>{client.nftsCount}</td>
                  <td>
                    <Link
                      to={"/client-cdc-token-logic-screen/" + client.id}
                      className="btn btn-info btn-sm mr-1"
                    >
                      Set CDC token logic
                    </Link>

                    <Link
                      to={"/client-stacked-nfts/" + client.id}
                      className="btn btn-info btn-sm mr-1"
                    >
                      Stacked Nfts
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <Pagination
      hasNext={hasNext}
      totalNumberOfPages={totalNumberOfPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    /> */}
        </>
      )}
    </>
  );
};

export default ClientTable;
