import React, { useState } from 'react'
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
        <form onSubmit={toSave}>
            <Label>Insira a URL de imagem do produto:</Label>
            <Input value={url} type='url' placeholder='https://...'
                required={true} onChange={(e) => setUrl(e.target.value)} />
            <Label>Insira o nome do produto:</Label>
            <Input value={produto} type='text' required={true} onChange={(e) => setProduto(e.target.value)} />
            <Label>Insira o valor do produto:</Label>
            <Input value={valor} required={true} onChange={(e) => setValor(e.target.value)} />
            <Label>Insira a descrição do produto:</Label>
            <Input value={descricao} type='text' required={true} minLength={10} onChange={(e) => setDescricao(e.target.value)} />
            <div>
                <Button />
            </div>
        </form>
    )
}

export default Form