import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigtableInstanceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBigtableInstanceIamBindingArgs {
  instance: string;
  members: string[];
  role: string;
  condition: GoogleBigtableInstanceIamBindingArgsCondition;
}

export class google_bigtable_instance_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigtableInstanceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_bigtable_instance_iam_binding");
  }
}
