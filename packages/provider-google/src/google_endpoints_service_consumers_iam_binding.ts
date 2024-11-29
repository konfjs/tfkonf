import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleEndpointsServiceConsumersIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleEndpointsServiceConsumersIamBindingArgs {
  consumer_project: string;
  members: string[];
  role: string;
  service_name: string;
  condition: GoogleEndpointsServiceConsumersIamBindingArgscondition;
}
export class google_endpoints_service_consumers_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEndpointsServiceConsumersIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_endpoints_service_consumers_iam_binding");
  }
}