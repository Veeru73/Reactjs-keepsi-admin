import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllStackedNftsOfClient } from "../../../services/Api_calling";
import { useState } from "react";
import Loader from "../../../components/Loader";

const ClientStackedNftsTable = () => {
  const [loading, setLoading] = useState(false);
  const { clientId } = useParams();
  const [clientStackedNftsData, setClientStackedNftsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await getAllStackedNftsOfClient(clientId);
      if (res.success) {
        setClientStackedNftsData(res.data);
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
          {clientStackedNftsData.length != 0 ? (
            <>
              <div className="mr-1 mb-2 float-right">
                NFT Contract Address:-
                <b>{clientStackedNftsData.nft_contract_address}</b>
              </div>

              <table
                id="dtBasicExample"
                className="table table-striped table-bordered table-sm"
              >
                <thead>
                  <tr>
                    <th className="th-sm">SNO</th>
                    <th className="th-sm">Token id</th>
                    <th className="th-sm">Is Sold</th>
                  </tr>
                </thead>
                <tbody>
                  {clientStackedNftsData?.nfts?.map((nft, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{nft.token_id}</td>
                      <td>{nft.is_sold === true ? "YES" : "NO"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <div>No data found</div>
          )}
        </>
      )}
    </>
  );
};

export default ClientStackedNftsTable;
