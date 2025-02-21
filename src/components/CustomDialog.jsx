/* eslint-disable react/prop-types */
//React
import { useEffect, useState } from "react";

//Librerias
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

//Componentes
import { PoliticaPrivacidad } from "./PoliticaPrivacidad.jsx";

//Multi-Language
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { literals } from "../globals/languages.js";

export function CustomDialog({ open, onClose, isPoliticaPrivacidad }) {
  const { currentLanguage } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      if (open) {
        setIsOpen(true);
      }
    }, [open]);
  
    const handleClose = () => {
      setIsOpen(false);
      onClose();
    };
  
    return (
      <div>
      <Modal scrollBehavior={"inside"} size="4xl" backdrop="blur" isOpen={isOpen} onClose={handleClose}></Modal>
        <Modal scrollBehavior={isPoliticaPrivacidad ? "inside" : ""} size={isPoliticaPrivacidad ? "4xl" : ""} backdrop="blur" isOpen={isOpen} onClose={handleClose}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1 font-bold text-black">{isPoliticaPrivacidad ? 'Política de Privacidad' : literals[currentLanguage].TITULO_OK_MAIL}</ModalHeader>
            <ModalBody>
            {isPoliticaPrivacidad ? <PoliticaPrivacidad/> : literals[currentLanguage].OK_MAIL}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={handleClose}>
                {literals[currentLanguage].OK}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  }
