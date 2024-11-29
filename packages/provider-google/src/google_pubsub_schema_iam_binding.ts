import { TerraformConfig, TerraformResource } from "tfs";
export interface GooglePubsubSchemaIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GooglePubsubSchemaIamBindingArgs {
  members: string[];
  role: string;
  schema: string;
  condition: GooglePubsubSchemaIamBindingArgscondition;
}
export class google_pubsub_schema_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubSchemaIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_schema_iam_binding");
  }
}