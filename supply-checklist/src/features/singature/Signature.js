import SignatureCanvas from 'react-signature-canvas'

function Signature() {
  return (
    <SignatureCanvas
      canvasProps={{ width: 300, height: 100, className: 'signature' }}
    />
  )
}

export default Signature
