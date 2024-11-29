import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleNetworkSecurityAddressGroupIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: Condition;
}
export class google_network_security_address_group_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecurityAddressGroupIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_network_security_address_group_iam_binding");
  }
}