import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsShieldProactiveEngagementArgsEmergencyContact {
  contact_notes?: string;
  email_address: string;
  phone_number?: string;
}
export interface AwsShieldProactiveEngagementArgs {
  enabled: boolean;
  emergency_contact: AwsShieldProactiveEngagementArgsEmergencyContact;
}
export class aws_shield_proactive_engagement extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsShieldProactiveEngagementArgs) {
    super(config, "resource", args, resourceName, "aws_shield_proactive_engagement");
  }
}