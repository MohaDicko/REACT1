import Description from "./component/Description"
import Image from "./component/Image"
import Name from "./component/Name"
import Price from "./component/Price"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyLogo from './assets/react.svg'

function App() {
  const firstName = 'Mohammed'
  return (
    <div>

      <Card className="text-center">
        <Card.Header>
          <Image />
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary"><Price /></Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          {firstName ? <><p> {`Hello, ${firstName}`} </p>
          <img src = {MyLogo}  alt = "mon image"/>
          </>
          :(
            <>
            <p> Hello, there </p>
          
</>)}
        </Card.Footer>
      </Card>
    </div>
  )
}

export default App