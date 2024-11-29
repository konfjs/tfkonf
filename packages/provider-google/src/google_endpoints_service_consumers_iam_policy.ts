import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleEndpointsServiceConsumersIamPolicyArgs {
  consumer_project: string;
  policy_data: string;
  service_name: string;
}
export class google_endpoints_service_consumers_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEndpointsServiceConsumersIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_endpoints_service_consumers_iam_policy");
  }
}