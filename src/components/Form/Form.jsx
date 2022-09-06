import React from 'react'
import S from './Form.module.css'
import Button from '../common/Button/Button'
import Input from '../common/Input/Input'
import Label from '../common/Label/Label'

const Form = ({ handleOnChange, handleClick }) => {

    return (
        <div className={S.formPost}>
            <form>
                <fieldset>
                    <Label text='Insira a URL de imagem do produto:' />
                    <Input type='url' placeholder='https://...'
                        required={true} onChange={({ target }) => handleOnChange(target, "url")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira o nome do produto:' />
                    <Input type='text' required={true} onChange={({ target }) => handleOnChange(target, "produto")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira o valor do produto:' />
                    <Input required={true} onChange={({ target }) => handleOnChange(target, "valor")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira a descrição do produto:' />
                    <Input type='text' required={true} minLength={10} onChange={({ target }) => handleOnChange(target, "descricao")} />
                </fieldset>
                <div className={S.btnPost}>
                    <Button handleClick={handleClick} texto='Submeter' />
                </div>
            </form>
        </div >
    )
}

export default Form