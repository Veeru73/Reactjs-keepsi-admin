import React, { useState, useEffect } from "react";
import Loader from "../../../components/Loader";
import { useParams } from "react-router-dom";
import {
  getAllCdcTokenLogicsByClientId,
  createCdcTokenLogic,
  updateCdcTokenLogic,
} from "../../../services/Api_calling";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientCdcTokenLogicForm = () => {
  const { clientId } = useParams();
  const [loading, setLoading] = useState(false);
  const [cdcTokenLogicData, setCdcTokenLogicData] = useState({});
  const [selectedType, setSelectedType] = useState("PERNFT"); // Initialize with PERNFT as the default type
  const [fixedKtokens, setFixedKtokens] = useState("");
  const [nftKTokens, setNftKTokens] = useState({}); // State for the K-Token inputs in case of PERNFT
  const isExistingRecordId = cdcTokenLogicData.id;
  const typeHandler = (event) => {
    setSelectedType(event.target.value);
  };

  const fixedKtokensHandler = (event) => {
    setFixedKtokens(event.target.value);
  };

  const handleNftKTokensChange = (event, token_id) => {
    const updatedNftKTokens = { ...nftKTokens };
    updatedNftKTokens[token_id] = event.target.value;
    setNftKTokens(updatedNftKTokens);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // Prepare data to send to the backend API
    const dataToSend = { client_id: +clientId, type: selectedType };

    if (selectedType === "FIXED") {
      dataToSend["fixed_ktokens_required"] = +fixedKtokens;
      dataToSend["per_nft_ktokens_required"] = {};
    } else {
      let per_nft_ktokens_required = {};
      cdcTokenLogicData.nfts.forEach((nft) => {
        per_nft_ktokens_required[nft.token_id] = nftKTokens[nft.token_id] || 0;
      });
      dataToSend["per_nft_ktokens_required"] = per_nft_ktokens_required;
    }

    const res = isExistingRecordId
      ? await updateCdcTokenLogic(dataToSend, isExistingRecordId)
      : await createCdcTokenLogic(dataToSend);

    setLoading(false);

    if (res.success) {
      toast.success(res.msg);
    }
    if (!res.success) {
      toast.error(res.msg);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await getAllCdcTokenLogicsByClientId(clientId);

      if (res.success) {
        setCdcTokenLogicData(res.data);
        setSelectedType(res.data?.type || "PERNFT");
        setFixedKtokens(res.data?.fixed_ktokens_required);
        setNftKTokens(res.data?.per_nft_ktokens_required || {});
      }

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    getData();
  }, []);

  return (
    <>
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <>
          {Object.keys(cdcTokenLogicData).length != 0 ? (
            <>
              <div className="topic_form">
                <form onSubmit={handleFormSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row mt-4">
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <select
                              className="form-control"
                              id="type"
                              onChange={typeHandler}
                              name="type"
                              value={selectedType}
                            >
                              <option value="PERNFT">PERNFT</option>
                              <option value="FIXED">FIXED</option>
                            </select>
                          </div>

                          <div className="col">
                            {selectedType === "FIXED" ? (
                              <>
                                <div className="form-group">
                                  <label htmlFor="name">K-Token</label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="k-token"
                                    name="title"
                                    placeholder="Enter fixed k tokens"
                                    value={fixedKtokens}
                                    onChange={fixedKtokensHandler}
                                    required
                                  />
                                </div>
                              </>
                            ) : (
                              <>
                                {cdcTokenLogicData?.nfts?.map((nft, index) => (
                                  <div key={index} className="form-group">
                                    <label htmlFor={`k-token-${index}`}>
                                      K-Token
                                    </label>
                                    <div className="input-group">
                                      <div className="input-group-append">
                                        <span className="input-group-text">
                                          NFT token id :- {nft.token_id}
                                        </span>
                                      </div>
                                      <input
                                        type="number"
                                        className="form-control"
                                        id={`k-token-${index}`}
                                        name={`title-${index}`}
                                        //   value={nft?.ktokens}
                                        value={nftKTokens[nft.token_id] || ""} // Pre-filled value for PERNFT type
                                        onChange={(event) =>
                                          handleNftKTokensChange(
                                            event,
                                            nft.token_id
                                          )
                                        }
                                        placeholder="Enter k tokens"
                                        required
                                      />
                                    </div>
                                  </div>
                                ))}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {loading ? (
                    <Loader />
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary btn-block btn-sm w-25 my-4"
                      size="sm"
                    >
                      <span className="spinner-border spinner-border-sm"></span>
                      {isExistingRecordId ? "Update" : "ADD"}
                    </button>
                  )}
                </form>
              </div>
            </>
          ) : (
            <div>Client has no stacked nfts</div>
          )}
        </>
      )}
    </>
  );
};

export default ClientCdcTokenLogicForm;
