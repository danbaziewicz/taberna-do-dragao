import React, { useState } from 'react'
import { editProduto } from '../../Service/Service'
import Button from '../common/Button/Button'
import Input from '../common/Input/Input'
import Label from '../common/Label/Label'
import S from './FormUp.module.css'

const FormUpdate = ({ setOpenUpdate, produtosUpdate, setReload }) => {
    const [formPut, setFormPut] = useState({
        categoria: produtosUpdate.categoria,
        url: produtosUpdate.url,
        produto: produtosUpdate.produto,
        valor: produtosUpdate.valor,
        descricao: produtosUpdate.descricao
    })

    const updateProd = async (e) => {
        e.preventDefault()
        const body = { ...formPut, valor: parseFloat(formPut.valor) }
        await editProduto(produtosUpdate.produto, body);
        alert("Produto atualizado com sucesso!")
        setReload(true);
        setOpenUpdate(false);
    }
    console.log(produtosUpdate);

    const handleCloseUpdate = () => {
        setOpenUpdate(false);
    }

    const handleOnChange = (target, key) => {
        const value = target.value;
        setFormPut({ ...formPut, [key]: value });
    }

    return (
        <div className={S.formPost}>
            <form onSubmit={(e) => updateProd(e)} >
                <fieldset>
                    <Label text='Categoria do Produto' />
                    <Input value={formPut.categoria} type='text' placeholder='Comida ou bebida?'
                        required={true} onChange={({ target }) => handleOnChange(target, "categoria")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira a URL de imagem do produto:' />
                    <Input value={formPut.url} type='url' placeholder='https://...'
                        required={true} onChange={({ target }) => handleOnChange(target, "url")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira o nome do produto:' />
                    <Input value={formPut.produto} type='text' required={true} onChange={({ target }) => handleOnChange(target, "produto")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira o valor do produto:' />
                    <Input value={formPut.valor} type='number' required={true} onChange={({ target }) => handleOnChange(target, "valor")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira a descrição do produto:' />
                    <Input value={formPut.descricao} type='text' required={true} minLength={10} onChange={({ target }) => handleOnChange(target, "descricao")} />
                </fieldset>
                <div className={S.btnPost}>
                    <Input type='submit' value='Atualizar' />
                    <Button onClick={handleCloseUpdate} texto='Cancelar' />
                </div>
            </form>
        </div >
    )
}

export default FormUpdate