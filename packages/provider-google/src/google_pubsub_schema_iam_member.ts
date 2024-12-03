import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GooglePubsubSchemaIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GooglePubsubSchemaIamMemberArgs {
  member: string;
  role: string;
  schema: string;
  condition: GooglePubsubSchemaIamMemberArgsCondition;
}
export class google_pubsub_schema_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubSchemaIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_schema_iam_member");
  }
}