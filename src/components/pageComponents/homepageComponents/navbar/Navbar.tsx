import React, { useCallback, useState } from "react";
import Menu, { MenuTypes } from "devextreme-react/menu";
import navServices from "../../../../utils/constants/navData";
import { ProductItemType, ProductType } from "./nav.types";

import "./nav.style.css";

export default function Navbar() {
  const transformToMenuItems = (products: ProductType[]): MenuTypes.Item[] => {
    return products.map((product) => ({
      ...product,
      items: product.items.map((item) => ({
        ...item,
        items: undefined,
      })),
    }));
  };

  const navItems = transformToMenuItems(navServices.getProducts());
  const [currentProduct, setCurrentProduct] = useState("");

  const itemClick = useCallback(
    (e: MenuTypes.ItemClickEvent) => {
      const itemData = e.itemData as ProductItemType;
      if (itemData.name) {
        setCurrentProduct(itemData.name);
      }
    },
    [setCurrentProduct]
  );

  return (
    <div className="nav-root">
      <div></div>
      <div>
        <Menu
          dataSource={navItems}
          displayExpr="name"
          showFirstSubmenuMode="onHover"
          hideSubmenuOnMouseLeave={true}
          onItemClick={itemClick}
        />
      </div>
    </div>
  );
}
