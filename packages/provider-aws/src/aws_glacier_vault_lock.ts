import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGlacierVaultLockArgs {
  complete_lock: boolean;
  ignore_deletion_error?: boolean;
  policy: string;
  vault_name: string;
}
export class aws_glacier_vault_lock extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlacierVaultLockArgs) {
    super(config, "resource", args, resourceName, "aws_glacier_vault_lock");
  }
}