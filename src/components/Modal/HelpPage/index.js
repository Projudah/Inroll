import React from 'react'
import Modal from 'react-responsive-modal'
import '../modal.scss'

export default class ModalWindow extends React.Component {
  onCloseModal = () => {
    this.props.handleModalUnmount()
  }

  render() {
    return (
      <div>
        <Modal open={true} onClose={this.onCloseModal} center>
          <h1>Help Page</h1>
          <h2>How to Add Classes</h2>
          <p>Duis est massa, congue non malesuada et, interdum at diam. Vestibulum ac nunc venenatis, maximus neque in, porta metus. Aliquam in erat posuere, sagittis mauris eget, efficitur sapien. Nulla ac convallis eros. Mauris sit amet nibh elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae justo in lacus imperdiet dictum non rhoncus diam. Nunc quis risus a neque pharetra tincidunt. Sed a consectetur lectus. Proin lobortis sed purus sed tincidunt.</p>
          <h2>How to Drop Classes</h2>
          <p>Duis est massa, congue non malesuada et, interdum at diam. Vestibulum ac nunc venenatis, maximus neque in, porta metus. Aliquam in erat posuere, sagittis mauris eget, efficitur sapien. Nulla ac convallis eros. Mauris sit amet nibh elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae justo in lacus imperdiet dictum non rhoncus diam. Nunc quis risus a neque pharetra tincidunt. Sed a consectetur lectus. Proin lobortis sed purus sed tincidunt.</p>
          <h2>How to Swap Classes</h2>
          <p>Duis est massa, congue non malesuada et, interdum at diam. Vestibulum ac nunc venenatis, maximus neque in, porta metus. Aliquam in erat posuere, sagittis mauris eget, efficitur sapien. Nulla ac convallis eros. Mauris sit amet nibh elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae justo in lacus imperdiet dictum non rhoncus diam. Nunc quis risus a neque pharetra tincidunt. Sed a consectetur lectus. Proin lobortis sed purus sed tincidunt.</p>
        </Modal>
      </div>
    )
  }
}
