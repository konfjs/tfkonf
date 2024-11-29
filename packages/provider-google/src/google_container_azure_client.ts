import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleContainerAzureClientArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleContainerAzureClientArgs {
  application_id: string;
  location: string;
  name: string;
  tenant_id: string;
  timeouts: GoogleContainerAzureClientArgstimeouts;
}
export class google_container_azure_client extends TerraformResource {
  readonly certificate!: string;
  readonly create_time!: string;
  readonly id?: string;
  readonly project?: string;
  readonly uid!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleContainerAzureClientArgs) {
    super(config, "resource", args, resourceName, "google_container_azure_client");
  }
}