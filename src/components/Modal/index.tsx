import { ReactNode } from "react";
import ReactModal from "react-modal"; // yarn add @types/react-modal -D

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, setIsOpen, children }: ModalProps) {
  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={isOpen}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {/* propriedade children é uma propriedade que todo componente no react tem. serve para acessarmos o conteudo que está sendo passado para um componente dentro da nossa aplicação */}
      {children}
    </ReactModal>
  );
}

//CLASS COMPONENT
// class Modal extends Component {
//   constructor(props) {
//     super(props);

//     const { isOpen } = this.props;
//     this.state = {
//       modalStatus: isOpen,
//     };
//   }

//   componentDidUpdate(prevProps) {
//     const { isOpen } = this.props;

//     if (prevProps.isOpen !== isOpen) {
//       console.log(this.props);
//       this.setState({ modalStatus: isOpen });
//     }
//   }

//   render() {
//     const { children, setIsOpen } = this.props;
//     const { modalStatus } = this.state;

//     return (
//       <ReactModal
//         shouldCloseOnOverlayClick={!false}
//         onRequestClose={setIsOpen}
//         isOpen={modalStatus}
//         ariaHideApp={false}
//         style={{
//           content: {
//             top: "50%",
//             left: "50%",
//             right: "auto",
//             bottom: "auto",
//             marginRight: "-50%",
//             transform: "translate(-50%, -50%)",
//             background: "#F0F0F5",
//             color: "#000000",
//             borderRadius: "8px",
//             width: "736px",
//             border: "none",
//           },
//           overlay: {
//             backgroundColor: "#121214e6",
//           },
//         }}
//       >
//         {children}
//       </ReactModal>
//     );
//   }
// }

// export default Modal;
