import { TextInput } from '@carbon/react';
import React, { useId } from 'react';
import '../App.scss'



const AddInput = React.forwardRef(({setValue}, ref) => {
    const id = useId()
    return (
        <>
            <h5 style={{ padding: "0.5rem 0.5rem 0.5rem 0" }}>Add Todo</h5>
            <div>
                <TextInput
                    style={{padding:'1.5rem 1rem'}}
                    ref={ref}
                    id={id}
                    className="input-test-class"
                    invalidText="Error message goes here"
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Add new task"
                    type="text"
                    warnText="Warning message that is really long can wrap to more lines but should not be excessively long."
                />
            </div>
        </>
    )
})

export default AddInput