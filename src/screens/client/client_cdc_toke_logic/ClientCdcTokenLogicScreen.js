import React, { Component } from "react";
import Nav from "../../../components/Nav";
import Header from "../../../components/Header";
import PageTitle from "../../../components/Pagetitle";
import ClientCdcTokenLogicForm from "./ClientCdcTokenLogicForm";

const ClientCdcTokenLogicScreen = () => {
  return (
    <>
      <div className="nav_bg_color" id="wrapper">
        <Nav />
        <div id="page-wrapper" className="gray-bg">
          <div className="row border-bottom">
            <Header />
          </div>
          <div className="wrapper wrapper-content animated fadeInRight">
            {/* Page title start */}
            <PageTitle page_headline="CDC token logics" />
            {/* Page title end */}

            <div className="row form_bg table_responsive white-bg">
              <div className="col-lg-12">
                <ClientCdcTokenLogicForm />
                {/* <Pagination />  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientCdcTokenLogicScreen;
