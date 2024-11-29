import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelFive {
  name: string;
}
export interface AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelFour {
  name: string;
}
export interface AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelOne {
  name: string;
}
export interface AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelThree {
  name: string;
}
export interface AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelTwo {
  name: string;
}
export interface AwsConnectUserHierarchyStructureArgsHierarchyStructure {
  level_five: AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelFive;
  level_four: AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelFour;
  level_one: AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelOne;
  level_three: AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelThree;
  level_two: AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelTwo;
}
export interface AwsConnectUserHierarchyStructureArgs {
  instance_id: string;
  hierarchy_structure: AwsConnectUserHierarchyStructureArgsHierarchyStructure;
}
export class aws_connect_user_hierarchy_structure extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectUserHierarchyStructureArgs) {
    super(config, "resource", args, resourceName, "aws_connect_user_hierarchy_structure");
  }
}