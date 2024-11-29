import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapTunnelInstanceIamBindingArgs {
  instance: string;
  members: string[];
  role: string;
  condition: Condition;
}
export class google_iap_tunnel_instance_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapTunnelInstanceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_iap_tunnel_instance_iam_binding");
  }
}