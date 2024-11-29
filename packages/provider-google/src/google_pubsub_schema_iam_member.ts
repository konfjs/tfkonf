import { TerraformConfig, TerraformResource } from "tfs";
export interface GooglePubsubSchemaIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GooglePubsubSchemaIamMemberArgs {
  member: string;
  role: string;
  schema: string;
  condition: GooglePubsubSchemaIamMemberArgscondition;
}
export class google_pubsub_schema_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubSchemaIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_schema_iam_member");
  }
}