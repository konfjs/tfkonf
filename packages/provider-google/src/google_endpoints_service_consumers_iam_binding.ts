import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEndpointsServiceConsumersIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleEndpointsServiceConsumersIamBindingArgs {
  consumer_project: string;
  members: string[];
  role: string;
  service_name: string;
  condition: GoogleEndpointsServiceConsumersIamBindingArgsCondition;
}

export class google_endpoints_service_consumers_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleEndpointsServiceConsumersIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_endpoints_service_consumers_iam_binding");
  }
}
