import React, { useState } from 'react'
import S from './Form.module.css'
import Button from '../common/Button/Button'
import Input from '../common/Input/Input'
import Label from '../common/Label/Label'
import { postProduto } from "../../Service/Service";

const Form = ({ setOpen, setReload }) => {
    const [formAtualiza, setFormAtualiza] = useState({
        categoria: "",
        url: "",
        produto: "",
        valor: "",
        descricao: ""
    })

    const handleClose = () => {
        setOpen(false);
    }


    const handleClick = async (e) => {
        e.preventDefault()
        const body = { ...formAtualiza, valor: parseFloat(formAtualiza.valor) }
        await postProduto(body)
        alert("Produto adicionado com sucesso!")
        setReload(true)
        setOpen(false)
    }

    const handleOnChange = (target, key) => {
        const value = target.value;
        setFormAtualiza({ ...formAtualiza, [key]: value });
    }


    return (
        <div className={S.formPost}>
            <form onSubmit={handleClick}>
                <h3>Adicione um novo produto</h3>
                <fieldset>
                    <Label text='Categoria do Produto' />
                    <Input value={formAtualiza.categoria} type='text' placeholder='Comida ou bebida?'
                        required={true} onChange={({ target }) => handleOnChange(target, "categoria")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira a URL de imagem do produto:' />
                    <Input value={formAtualiza.url} type='url' placeholder='https://...'
                        required={true} onChange={({ target }) => handleOnChange(target, "url")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira o nome do produto:' />
                    <Input value={formAtualiza.produto} type='text' required={true} onChange={({ target }) => handleOnChange(target, "produto")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira o valor do produto:' />
                    <Input value={formAtualiza.valor} type='number' required={true} onChange={({ target }) => handleOnChange(target, "valor")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira a descrição do produto:' />
                    <Input value={formAtualiza.descricao} type='text' required={true} minLength={10} onChange={({ target }) => handleOnChange(target, "descricao")} />
                </fieldset>
                <div className={S.btnPost}>
                    <Input type='submit' text='Submeter' />
                    <Button onClick={handleClose} texto='Fechar' />
                </div>
            </form>
        </div >
    )
}

export default Form