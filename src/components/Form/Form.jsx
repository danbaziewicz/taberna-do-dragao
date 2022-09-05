import React, { useState } from 'react'
import S from './Form.module.css'
import { postProduto } from '../../Service/Service'
import Button from '../common/Button/Button'
import Input from '../common/Input/Input'
import Label from '../common/Label/Label'

const Form = ({ setOpen, setReload }) => {
    const [url, setUrl] = useState('');
    const [produto, setProduto] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');

    const toSave = async (e) => {
        e.preventDefault()
        await postProduto({
            url: url,
            produto: produto,
            valor: valor,
            descricao: descricao
        })
        alert("Produto adicionado com sucesso!")
        setOpen(false)
        setReload(true)
    }

    return (
        <div className={S.formPost}>
            <form onSubmit={toSave}>
                <fieldset>
                    <Label text='Insira a URL de imagem do produto:' />
                    <Input value={url} type='url' placeholder='https://...'
                        required={true} onChange={(e) => setUrl(e.target.value)} />
                </fieldset>
                <fieldset>
                    <Label text='Insira o nome do produto:' />
                    <Input value={produto} type='text' required={true} onChange={(e) => setProduto(e.target.value)} />
                </fieldset>
                <fieldset>
                    <Label text='Insira o valor do produto:' />
                    <Input value={valor} required={true} onChange={(e) => setValor(e.target.value)} />
                </fieldset>
                <fieldset>
                    <Label text='Insira a descrição do produto:' />
                    <Input value={descricao} type='text' required={true} minLength={10} onChange={(e) => setDescricao(e.target.value)} />
                </fieldset>
                <div className={S.btnPost}>
                    <Button texto='Submeter' />
                </div>
            </form>
        </div >
    )
}

export default Form