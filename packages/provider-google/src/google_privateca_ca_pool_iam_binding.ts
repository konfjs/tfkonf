import { TerraformConfig, TerraformResource } from "tfs";
export interface GooglePrivatecaCaPoolIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GooglePrivatecaCaPoolIamBindingArgs {
  ca_pool: string;
  members: string[];
  role: string;
  condition: GooglePrivatecaCaPoolIamBindingArgscondition;
}
export class google_privateca_ca_pool_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePrivatecaCaPoolIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_privateca_ca_pool_iam_binding");
  }
}