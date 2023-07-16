import { Button } from '@carbon/react';

const SubmitButton = ({ handleSubmit }) => {
    return (
        <Button onClick={handleSubmit} style={{
            marginTop: "1rem"
        }} kind="tertiary">
            Submit
        </Button>
    )
}

export default SubmitButton