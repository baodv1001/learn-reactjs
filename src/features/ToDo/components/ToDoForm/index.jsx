import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';

ToDoForm.propTypes = {
    onSubmit: PropTypes.func
};

function ToDoForm(props) {
    return (
        <div>
            <InputField></InputField>
        </div>
    );
}

export default ToDoForm;