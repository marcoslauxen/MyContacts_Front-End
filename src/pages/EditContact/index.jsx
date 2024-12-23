import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";

export default function EditContact() {
    return (
        <>
            <PageHeader
                title="Editar Marcos Lauxen"
            />

            <ContactForm 
                buttonLabel="Salvar alterações"
            />
        </>
    );
}