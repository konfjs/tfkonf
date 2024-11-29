import { TerraformConfig, TerraformResource } from "tfs";
export interface Controls {
  id: string;
}
export interface ControlSets {
  name: string;
  controls: Controls;
}
export interface AwsAuditmanagerFrameworkArgs {
  compliance_type?: string;
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  control_sets: ControlSets;
}
export class aws_auditmanager_framework extends TerraformResource {
  readonly arn!: string;
  readonly framework_type!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAuditmanagerFrameworkArgs) {
    super(config, "resource", args, resourceName, "aws_auditmanager_framework");
  }
}