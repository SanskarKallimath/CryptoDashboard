import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import SideNav from "./Sidenav";

const Sidedrawer = ({ isOpen, onClose, onOpen }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <SideNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidedrawer;
