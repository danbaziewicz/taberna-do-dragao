import React from 'react'

const FormUpdate = ({ }) => {
    const [formPut, setFormPut] = useState({
        categoria: categoria,
        url: url,
        produto: produto,
        valor: valor,
        descricao: descricao
    })

    const handleCloseUpdate = () => {
        setOpenUpdate(false);
    }

    return (
        <div className={S.formPost}>
            <form >
                <fieldset>
                    <Label text='Categoria do Produto' />
                    <Input value={categoria} type='text' placeholder='Comida ou bebida?'
                        required={true} onChange={({ target }) => handleOnChange(target, "categoria")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira a URL de imagem do produto:' />
                    <Input value={url} type='url' placeholder='https://...'
                        required={true} onChange={({ target }) => handleOnChange(target, "url")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira o nome do produto:' />
                    <Input value={produto} type='text' required={true} onChange={({ target }) => handleOnChange(target, "produto")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira o valor do produto:' />
                    <Input value={valor} type='number' required={true} onChange={({ target }) => handleOnChange(target, "valor")} />
                </fieldset>
                <fieldset>
                    <Label text='Insira a descrição do produto:' />
                    <Input value={descricao} type='text' required={true} minLength={10} onChange={({ target }) => handleOnChange(target, "descricao")} />
                </fieldset>
                <div className={S.btnPost}>
                    <Button onClick={handleClick} texto='Atualizar' />
                    <Button onClick={handleCloseUpdate} texto='Cancelar' />
                </div>
            </form>
        </div >
    )
}

export default FormUpdate