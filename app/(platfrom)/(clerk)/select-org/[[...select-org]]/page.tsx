import { OrganizationList } from "@clerk/nextjs";
export default function (){
    return (
        <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
        />
    )
}