import React, { useCallback, useState } from "react";
import Accordion, { AccordionTypes } from "devextreme-react/accordion";
import userAcordianData from "./acordianData";
import "./sidebar.style.css";
import { CustomItem, CustomTitle } from "./AcordianContent";
export default function Sidebar() {
  const getUserAcordianData = userAcordianData.getCompanies();
  const [selectedItems, setSelectedItems] = useState([getUserAcordianData[0]]);

  const selectionChanged = useCallback(
    (e: AccordionTypes.SelectionChangedEvent) => {
      let newItems = [...selectedItems];
      e.removedItems.forEach((item) => {
        const index = newItems.indexOf(item);
        if (index >= 0) {
          newItems.splice(index, 1);
        }
      });
      if (e.addedItems.length) {
        newItems = [...newItems, ...e.addedItems];
      }
      setSelectedItems(newItems);
    },
    [selectedItems, setSelectedItems]
  );

  return (
    <div className="side-root">
      <div>
        <div className="logo-container">
          <img src="/yummly.svg" className="logo" alt="logo" />
        </div>

        <div className="user-options">
          <div className="user-details">
            <img src="/avatar.webp" alt="" className="userimage" />
            <div className="details">
              <p>Name</p>
              <p>vikas</p>
              <p>User Type</p>
              <p> chef</p>
              <p>Contacts</p>
              <p>vikastiwari@gmail.com</p>
            </div>
          </div>
          <div className="user-options">
            <Accordion
              dataSource={getUserAcordianData}
              collapsible={true}
              animationDuration={300}
              selectedItems={selectedItems}
              onSelectionChanged={selectionChanged}
              itemTitleRender={CustomTitle}
              itemRender={CustomItem}
              id="accordion-container"
            />
          </div>
        </div>
      </div>
      <div className="download">i am download</div>
    </div>
  );
}
