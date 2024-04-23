import { makeAutoObservable } from 'mobx';

export default class Store {
  visibleCreate = false;
  visibleAccident = false;
  visibleEdit = false;
  visibleStatsNightmans = false;

  isAuth = true;

  userData = null;

  searchText = '';

  constructor() {
    makeAutoObservable(this);
  }

  setVisibleCreate(bool) {
    this.visibleCreate = bool;
  }

  setVisibleAccident(bool) {
    this.visibleAccident = bool;
  }

  setVisibleEdit(bool) {
    this.visibleEdit = bool;
  }

  setVisibleNightmans(bool) {
    this.visibleStatsNightmans = bool;
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUserData(data) {
    this.userData = data;
  }

  setSearchText(text) {
    this.searchText = text;
  }
}
