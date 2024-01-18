"use client"
import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts"
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Seprator } from "@components/ui/seprator"
import { Skeleton } from "@components/ui/seprator"
import { Accordion } from "@components/ui/accordion"


interface SidebarProps {
    storageKey?: string;
}
export const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {})
    const { organization: activeOrganization } = useOrganization()
    const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
        userMemberships: {
            infinite: true
        }
    })
    const defaultAccordionValue: string[] = Object.keys(expanded).reduce((acc: string[], key: string) => {
        if (expanded[key]) {
            acc.push(key);
        }
    })
    const onExpand = (id: string) => {
        setExpanded((curr) => ({
            ...curr,
            [id]: !expanded[id]
        }))
    }
    if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
        return (
            <>
                <Skeleton />
            </>
        )
    }
    return (
        <>
            <div className="font-medium text-xs flex items-center mb-1">
                <span className="pl-4">
                    workspace
                </span>
                <Button
                    asChild
                    type="button"       
                    size="icon"
                    variant="ghost"
                    className="ml-auto"
                >
                    <Link href="/select-org">
                        <Plus className="h-4 w-4" />
                    </Link>
                </Button>
            </div >
            <Accordion
                type="muttple"
                defaultValue={defaultAccordionValue}
                className="space-y-2">
                {userMemberships.data.map(({ organization }) => (
                    // <p key={organization.id}>
                    //     {organization.id}
                    // </p>
                    <NavItem
                        key={organization.id}
                        isActive={activeOrganization?.id === organization.id}
                        isExpanded={expanded[organization.id]}
                        organization={organization}
                        onExpand={onExpand}
                    />
                ))}

            </Accordion >

        </>
    )
}