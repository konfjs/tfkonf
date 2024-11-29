import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleEndpointsServiceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleEndpointsServiceIamBindingArgs {
  members: string[];
  role: string;
  service_name: string;
  condition: GoogleEndpointsServiceIamBindingArgsCondition;
}
export class google_endpoints_service_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEndpointsServiceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_endpoints_service_iam_binding");
  }
}