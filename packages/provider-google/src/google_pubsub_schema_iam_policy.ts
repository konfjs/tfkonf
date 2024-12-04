import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubSchemaIamPolicyArgs {
  policy_data: string;
  schema: string;
}

export class google_pubsub_schema_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubSchemaIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_schema_iam_policy");
  }
}
