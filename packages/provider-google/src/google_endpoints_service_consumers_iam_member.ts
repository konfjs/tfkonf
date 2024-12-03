import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleEndpointsServiceConsumersIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleEndpointsServiceConsumersIamMemberArgs {
  consumer_project: string;
  member: string;
  role: string;
  service_name: string;
  condition: GoogleEndpointsServiceConsumersIamMemberArgsCondition;
}
export class google_endpoints_service_consumers_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEndpointsServiceConsumersIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_endpoints_service_consumers_iam_member");
  }
}