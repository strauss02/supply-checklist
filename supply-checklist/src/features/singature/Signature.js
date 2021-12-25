import SignatureCanvas from 'react-signature-canvas'

function Signature() {
  return (
    <div>
      <SignatureCanvas
        canvasProps={{ width: 300, height: 100, className: 'signature' }}
      />
      <div>Sign here please!</div>
    </div>
  )
}

export default Signature
